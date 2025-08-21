export function normalizeScore(candidateScore, subjects) {
  const normalizedScores = {};
  for (const subject in subjects) {
    normalizedScores[subject] =
      (candidateScore[subject] / subjects[subject].max) * 100;
  }
  return normalizedScores;
}

function calculateFitScore(normalizedScores, weights, subjects) {
  let sumWeight = 0;
  let sumWeightedScores = 0;

  for (const subject in subjects) {
    const w = weights[subject] || 0;
    if (w > 0) {
      sumWeight += w;
      sumWeightedScores += normalizedScores[subject] * w;
    }
  }
  return sumWeight > 0 ? sumWeightedScores / sumWeight : 0;
}

export function evaluateCandidate(candidate, majors, subjects) {
  const normalized = normalizeScore(candidate, subjects);
  return majors.map((major) => {
    const fitScore = calculateFitScore(normalized, major, subjects);
    return {
      id: major.maNganh,
      tenNganh: major.tenNganh,
      tenTruong: major.tenTruong,
      fitScore: parseFloat(fitScore.toFixed(2)),
      eligible: candidate.total >= major.diemChuan,
      diemChuan: major.diemChuan,
      candidateScores: {
        vietnamese: normalized.vietnamese,
        english: normalized.english,
        math: normalized.math,
        logic: normalized.logic,
        science: normalized.science,
        total: candidate.total,
      },
    };
  });
}

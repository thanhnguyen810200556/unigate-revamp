export function generateMockProfileId() {
  const date = new Date();
  const yyyymmdd = date.toISOString().slice(0, 10).replace(/-/g, "");
  const randomNum = Math.floor(Math.random() * 1_0000) // 8 chữ số
    .toString()
    .padStart(4, "0");
  return `HS${yyyymmdd}${randomNum}`;
}

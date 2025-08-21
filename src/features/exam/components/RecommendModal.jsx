import Loading from "../../../shared/ui/Loading";
import Modal from "../../../shared/ui/Modal";
function RecommendModal({
  isRecommendModalOpen,
  onCloseRecModal,
  AIsummary,
  isLoadingRecommend,
  AIrecommendations,
}) {
  if (!isRecommendModalOpen) return null;

  return (
    <Modal className="max-w-5xl">
      {isLoadingRecommend ? (
        <Loading>
          <span>Đang tải...</span>
        </Loading>
      ) : (
        <>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="mx-auto text-lg font-semibold text-[#0056B3]">
              Khuyến nghị ngành học
            </h2>
            <button
              onClick={onCloseRecModal}
              className="cursor-pointer text-2xl"
            >
              &times;
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-gray-200">
              <thead>
                <tr>
                  <th className="p-3 text-sm font-semibold text-gray-700">
                    Mã ngành
                  </th>
                  <th className="p-3 text-sm font-semibold text-gray-700">
                    Tên ngành
                  </th>
                  <th className="p-3 text-sm font-semibold text-gray-700">
                    Tên trường
                  </th>
                  <th className="p-3 text-sm font-semibold text-gray-700">
                    Điểm chuẩn năm trước
                  </th>
                  <th className="p-3 text-sm font-semibold text-gray-700">
                    Độ phù hợp
                  </th>
                </tr>
              </thead>
              <tbody>
                {AIrecommendations.map((rec, index) => (
                  <tr key={index} className="border-b border-t border-gray-300">
                    <td className="p-3 text-sm text-gray-900">{rec.id}</td>
                    <td className="p-3 text-sm text-gray-900">
                      {rec.tenNganh}
                    </td>
                    <td className="p-3 text-sm text-gray-900">
                      {rec.tenTruong}
                    </td>
                    <td className="mx-auto p-3 text-sm text-gray-900">
                      {rec.diemChuan}
                    </td>
                    <td className="p-3 text-sm text-gray-900">
                      {rec.fitScore}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <h3 className="text-md font-semibold text-gray-800">
              Nhận xét tổng quan:
            </h3>
            <p className="text-gray-700">{AIsummary?.overview}</p>
            <p className="mt-2 text-gray-700">{AIsummary?.advice}</p>
          </div>

          <div className="mt-4 flex items-center">
            <div className="mr-2 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#0056B3] text-white">
              !
            </div>
            <p className="font-roboto text-[14px] text-[#6B7280]">
              Khuyến nghị này dựa trên kết quả thi của thí sinh và chỉ mang tính
              chất tham khảo.
            </p>
          </div>
        </>
      )}
    </Modal>
  );
}

export default RecommendModal;

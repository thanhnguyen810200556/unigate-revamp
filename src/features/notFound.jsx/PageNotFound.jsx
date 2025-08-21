import { useMoveBack } from "../../shared/hooks/useMoveBack";
import Button from "../../shared/ui/Button";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="flex h-screen items-center justify-center bg-gray-50 p-12">
      <div className="w-full max-w-4xl rounded-md border border-gray-200 bg-white p-12 text-center">
        <div className="mb-8 text-3xl font-medium">
          Trang bạn tìm kiếm không tồn tại 😢{" "}
        </div>
        <Button variant="lightPrimary" onClick={moveBack}>
          &larr; Trở về
        </Button>
      </div>
    </main>
  );
}

export default PageNotFound;

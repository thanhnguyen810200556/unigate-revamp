import { provinces } from "../../mocks/provincesData";

export const profileFields = {
  left: [
    { type: "input", htmlFor: "cccd", label: "CCCD" },
    { type: "input", htmlFor: "fullName", label: "Họ và Tên" },
    {
      type: "select",
      htmlFor: "sex",
      label: "Giới tính",
      options: [
        { value: "male", label: "Nam" },
        { value: "female", label: "Nữ" },
      ],
      formInput: "",
      setFormInput: "",
    },

    {
      type: "input",
      htmlFor: "dateOfBirth",
      label: "Ngày sinh",
    },
    {
      type: "input",
      htmlFor: "ethnicGroup",
      label: "Dân tộc",
    },
    {
      type: "input",
      htmlFor: "address",
      label: "Địa chỉ thường chú",
    },
    {
      type: "input",
      htmlFor: "contact",
      label: "Địa chỉ liên lạc",
    },
  ],
  right: [
    {
      type: "select",
      htmlFor: "province",
      label: "Tỉnh/Thành phố của trường THPT",
      options: provinces,
    },
    {
      type: "select",
      htmlFor: "school",
      label: "Trường THPT",
    },
    { type: "input", htmlFor: "email", label: "Email" },
    {
      type: "input",
      htmlFor: "phoneNumber",
      label: "Số điện thoại",
    },
    {
      type: "input",
      htmlFor: "priorityArea",
      label: "Khu vực ưu tiên",
    },
    {
      type: "input",
      htmlFor: "priorityCandidate",
      label: "Đối tượng ưu tiên",
    },
  ],
};

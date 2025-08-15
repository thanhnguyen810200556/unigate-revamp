function DemoAccount() {
  const demoAccounts = [
    { cccd: "012345678901", password: "qwerty123" },
    { cccd: "012345678902", password: "admin123" },
  ];

  return (
    <div className="mt-4 rounded-md border border-yellow-200 bg-yellow-50 p-3">
      <p className="mb-2 text-xs font-medium text-yellow-800">
        Tài khoản demo:
      </p>
      <div className="space-y-1 text-xs text-yellow-700">
        {demoAccounts.map((account, index) => (
          <div key={index}>
            CCCD: {account.cccd} | MK: {account.password}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DemoAccount;

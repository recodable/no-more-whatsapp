export function SuccessNotification({ title, message, dismiss }) {
  return (
    <div className="w-80 bg-green-500 border border-gray-200 px-4 py-2 shadow-lg rounded">
      <p className="font-bold text-green-100">{title}</p>

      <p className="text-green-300">{message}</p>

      <button
        type="button"
        className=" text-green-200 font-semibold mt-2 hover:text-green-100"
        onClick={dismiss}
      >
        Dismiss
      </button>
    </div>
  );
}

export function InfoNotification({ title, message, dismiss }) {
  return (
    <div className="w-80 bg-blue-500 border border-gray-200 px-4 py-2 shadow-lg rounded">
      <p className="font-bold text-blue-100">{title}</p>

      <p className="text-blue-300">{message}</p>

      <button
        type="button"
        className=" text-blue-200 font-semibold mt-2 hover:text-blue-100"
        onClick={dismiss}
      >
        Dismiss
      </button>
    </div>
  );
}

export function WarningNotification({ title, message, dismiss }) {
  return (
    <div className="w-80 bg-yellow-500 border border-gray-200 px-4 py-2 shadow-lg rounded">
      <p className="font-bold text-yellow-100">{title}</p>

      <p className="text-yellow-300">{message}</p>

      <button
        type="button"
        className=" text-yellow-200 font-semibold mt-2 hover:text-yellow-100"
        onClick={dismiss}
      >
        Dismiss
      </button>
    </div>
  );
}

export function DangerNotification({ title, message, dismiss }) {
  return (
    <div className="w-80 bg-red-500 border border-gray-200 px-4 py-2 shadow-lg rounded">
      <p className="font-bold text-red-100">{title}</p>

      <p className="text-red-300">{message}</p>

      <button
        type="button"
        className=" text-red-200 font-semibold mt-2 hover:text-red-100"
        onClick={dismiss}
      >
        Dismiss
      </button>
    </div>
  );
}

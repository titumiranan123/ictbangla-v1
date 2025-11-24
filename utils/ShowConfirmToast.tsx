import toast from "react-hot-toast";

export const showConfirmToast = (sectionId: string, onConfirm: () => void) => {
  toast(
    (t) => (
      <span className="flex flex-col gap-3">
        <span>Are you sure you want to delete this section?</span>
        <div className="flex gap-3 justify-end">
          <button
            className="bg-red-500 text-white px-3 py-1 rounded"
            onClick={() => {
              toast.dismiss(t.id);
              onConfirm();
            }}
          >
            Yes
          </button>
          <button
            className="bg-gray-300 px-3 py-1 rounded"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </span>
    ),
    {
      duration: 99999, 
    }
  );
};

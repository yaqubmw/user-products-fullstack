import Link from "next/link";

interface ListCardPropss {
  id: string;
  title: string;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const ListCard: React.FC<ListCardPropss> = ({
  id,
  title,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row items-center justify-between text-sm rounded bg-white border border-indigo-200 p-2">
      <Link href={`/products/${id}`}>
        <div className="hover:text-indigo-900 transition-colors p-1">
          {title}
        </div>
      </Link>
      <div className="flex items-center space-x-3">
        <button
          onClick={() => onEdit(id)}
          className="py-1 px-2 min-w-20 text-xs rounded focus:outline-none text-white bg-green-500 hover:bg-green-600 transition-colors"
        >
          Update
        </button>
        <button
          onClick={() => onDelete(id)}
          className="py-1 px-2 min-w-20 text-xs rounded focus:outline-none text-white bg-red-500 hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListCard;

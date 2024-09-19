import { SlEarphonesAlt } from "react-icons/sl";
import { FaRegAddressCard, FaWallet, FaBus } from "react-icons/fa";

const ProductData = [
    {
        id: 1,
        icon: <SlEarphonesAlt></SlEarphonesAlt>,
        title: "7/24 Müşteri Hizmetleri",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab sed, exercitationem minima aliquid eligendi distinctio? Fugit repudiandae numquam hic quo recusandae.",
    },
    {
        id: 2,
        icon: <FaRegAddressCard></FaRegAddressCard>,
        title: "Güvenli Ödeme",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab sed, exercitationem minima aliquid eligendi distinctio? Fugit repudiandae numquam hic quo recusandae.",
    },
    {
        id: 3,
        icon: <FaWallet></FaWallet>,
        title: "Bütçe Dostu",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab sed, exercitationem minima aliquid eligendi distinctio? Fugit repudiandae numquam hic quo recusandae.",
    },
    {
        id: 4,
        icon: <FaBus ></FaBus>,
        title: "Seçkin Firmalar",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ab sed, exercitationem minima aliquid eligendi distinctio? Fugit repudiandae numquam hic quo recusandae.",
    },
];

const Product = () => {
  return (
    <div className="mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center bg-gray-200 dark:bg-gray-600">
            {ProductData.map((data) => (
                <div key={data.id} className="p-10 m-5">
                    {data.icon}
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Product
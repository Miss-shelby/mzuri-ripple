import Image from "next/image";

const Comments = () => {
  return (
    <div>
      <h4 className="font-semibold">Comments</h4>
      <Card title='Hero Maharzan' location="Pokhara, Nepal">
        <button className="bg-gradient-to-b from-transparent to-gray-700 text-black-100 py-2 px-4 rounded">
          See More
        </button>
      </Card>
      <Card title='Hero Maharzan' location="Pokhara, Nepal">
        <button className="bg-gradient-to-b from-transparent to-gray-700 text-black-100 py-2 px-4 rounded">
          See More
        </button>
      </Card>
      <Card title='Hero Maharzan' location="Pokhara, Nepal">
        
      </Card>
    </div>
  );
};

const Card = ({ title, location, children }) => {
  return (
    <div className="card w-[760px] mt-8 h-fit shadow-xl">
      <div className="flex border-b border-black-100 pb-6 px-6 pt-4">
        <div className="h-fit w-fit mr-4">
          <Image src='/profileAvatar.png' height={45} width={45} alt='profile image'/>
        </div>
        <div>
          <h4 className="text-lg font-medium">{title}</h4>
          <p>{location}</p>
        </div>
      </div>
        <p className="pl-6 py-6">Hope you do well in your project and complete the work swiftly.</p>
      {children}
    </div>
  );
};

export default Comments;

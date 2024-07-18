import Image from "next/image"

const Campaign = ()=>{
    return (
        <div className=" mt-12 ">
        <div className="flex justify-between w-full mb-6 items-center">
            <p className="text-2xl text-black-100 font-semibold">Story</p>
            <button className=" btn rounded-[6px] text-lg 
            font-medium h-10 min-h-10 bg-custom-blue mt-4 text-white px-16 hover:bg-transparent hover:text-custom-blue">Edit</button>
        </div>
        <div className="relative h-fit w-fit">
            <Image src="/story.png" height={272} width={800} alt="story image"/>
        </div>
        <div className="text-black-100 font-normal pt-4 leading-[19.5px] text-[15px]">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque donec et nibh bibendum nec proin nisl. Elementum aenean neque diam aliquam, vel, quis sed. Cursus ut ipsum nulla erat morbi porttitor vel nec. Sed quam rhoncus, diam pellentesque fermentum porttitor adipiscing quis tellus.
            Odio dui elit quam tincidunt et rutrum ut. Sit aliquet ullamcorper nam laoreet nisl. Ante vulputate sit sodales consequat. Luctus ipsum tincidunt at tellus purus. Consectetur quis massa id duis est enim. Cras pellentesque volutpat nunc pharetra. Tristique volutpat adipiscing eget erat turpis sapien viverra. A risus et, diam imperdiet varius amet. Sapien sagittis, eget viverra risus. Lacus, elit ac nisi, elementum cras. At interdum purus tortor, dis.
            </p>
            <p className="py-4">
            Lorem elit viverra pellentesque integer ut nibh elementum. Sit lectus risus, dui mauris, dapibus habitasse in urna. Facilisis viverra enim facilisis sit faucibus morbi. Nibh cras dui, in in tellus dignissim morbi dui. Massa nisl nulla aliquam interdum justo, consectetur luctus ac.</p>
            <p>Sit eget mauris suspendisse eget rhoncus sit feugiat. Ultricies pharetra, massa mi a auctor habitasse diam euismod egestas. Sed cursus ullamcorper nunc, id tristique suspendisse egestas. Sed enim nam maecenas neque porttitor risus mauris. Vel sociis tristique tincidunt sit netus gravida </p>
        </div>
        </div>
    )
}
export default Campaign
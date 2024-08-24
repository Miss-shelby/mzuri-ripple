import Image from 'next/image'
import React from 'react'
const logo = '/Logo.png'
const skype = '/bi_skype.png'
const facebook = '/facebook-icon.png'
const linkedin = '/bi_linkedin.png'
const youtube = '/bi_youtube.png'
const twitter = '/bi_twitter.png'
//footer links component
const FooterLink =({href,children})=>{
return (
    <a href={href} className='text-black text-sm'>
        {children}
    </a>
)
}


//footer section mapped
const FooterSection = ({title,links})=>{
    return (
        <div >
            <p className='font-semibold  mb-4'>{title}</p>
            {links.map((link,index)=>{
                return (

                <FooterLink key={index}>
                    <p className='leading-8'>{link.label}</p>
                </FooterLink>
                )
            })}
        </div>
    )
}


//social media  links
const SocialMediaLinks =({href,icon,srText})=>{
    return (
        <a href={href} className='text-black text-sm'>
          <p> <span className='sr-only'>{srText}</span> {icon}</p> 
        </a>
    )
}

//social media icons
const SocialMediaIcons=()=>{
    return (
        <div className='flex pt-[4rem] justify-end  w-[12rem]'>
            <SocialMediaLinks href="#" srText="skype" icon={<Image src={skype} alt='skype-icon' height={15} width={15} />}/>
          <SocialMediaLinks href="#" srText="facebook"  icon={<Image src={facebook} className='mx-2' alt='facebook-icon' height={15} width={15} />}/>
          <SocialMediaLinks href="#" srText="linkedin" icon={<Image src={linkedin} alt='linkedin-icon' height={15} width={15} />}/>
          <SocialMediaLinks href="#" srText="youtube" icon={<Image src={youtube}  className='mx-2' alt='youtube-icon' height={15} width={15} />}/>
          <SocialMediaLinks href="#" srText="twitter" icon={<Image src={twitter} alt='twitter-icon' height={15} width={15} />}/>
        </div>
    )
}

//main footer component
const Footer = () => {
    const projectLinks=[
        {label:"All",href:"#"},
        {label:"Antique",href:"#"},
        {label:"Design & Arts",href:"#"},
        {label:"Games & Toys",href:"#"},
    ];
    const otherLinks=[
        {label:"Film",href:"#"},
        {label:"Food",href:"#"},
        {label:"Music",href:"#"},
        {label:"Technologies",href:"#"},
    ];
    const aboutLinks=[
        {label:"About Us",href:"#"},
        {label:"Explore",href:"#"},
        {label:"Login",href:"#"},
        {label:"Contact",href:"#"},
    ];
    const infoLinks=[
        {label:"Legal information",href:"#"},
        {label:"Fees Policy",href:"#"},
        {label:"Privacy Policy",href:"#"},
        {label:"Cookie Policy",href:"#"},
    ];
  return (
   <section className='w-full pt-10 flex justify-center bg-[#F4F4F4] max-w-[1920px]  mx-auto   px-[10rem]'>
    <div className='grid lg:grid-cols-6 md:grid-cols-2   w-full'>
      <div>
      <FooterSection title="Projects" links={projectLinks}/>
      <div className='pt-[1rem]'>
        <Image alt='logo' width={80} height={80} quality={100} src={logo}/>
      </div>
      </div>
      <div className='col-span-2'>
      <FooterSection title="Films" links={otherLinks}/>
      <p className='text-[12px] pt-[2rem]'>2024. All right reserved </p>
      </div>
       <FooterSection title="About" links={aboutLinks}/>
       <FooterSection title="Info" links={infoLinks}/>
       <div className='flex flex-col w-full  '>
            <p className='font-semibold text-sm mb-4 '>Langugae & Currency</p>
            <select className='w-[12rem] py-1'>
                <option>English</option>
            </select>
            <select className='w-[12rem] my-4 py-1'>
                <option>Dollar(usd)</option>
            </select>
        <SocialMediaIcons/>
       </div>
    </div>
   
   </section>
  )
}

export default Footer

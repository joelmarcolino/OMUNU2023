import Image from 'next/image'


export const MyImageComponent = ({name, width, height, id}: any) => {
  return (
    
    <Image
      src={name}
      alt="Picture of the author"
      width={width || 100}
      height={height || 100}
      id={id}
      className="img-thumbnail border-0 bg-transparent"
    />

  )
}
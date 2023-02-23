import Image from 'next/image'

type ImageProps={
  name:any,
  width:number,
  height:number,
  id?:string
}

export const ImageComponent = ({name, width, height, id}: ImageProps) => {
  return (  
      <Image
        src={name}
        alt="Picture of the author"
        width={width}
        height={height}
        id={id}
        className="img-thumbnail border-0 bg-transparent"
      />
  )
}
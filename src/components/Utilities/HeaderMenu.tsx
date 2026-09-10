const HeaderMenu = ({ title }: {title: string}) => {
  return (
    <div>
      <div className="flex justify-center p-7">
        <h3 className="font-display text-primary text-2xl">{title}</h3>
      </div>
    </div>
  )
}

export default HeaderMenu
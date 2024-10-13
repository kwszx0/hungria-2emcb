interface RoundedBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  color: 'red' | 'green'
  border?: boolean
  className?: string
}

export default function RoundedBox({
  color,
  border = false,
  className,
  children,
  ...rest
}: RoundedBoxProps) {
  return (
    <div
      {...rest}
      className={`${color === 'red' ? 'bg-[#CC5044]' : 'bg-[#A1BE76]'} ${
        border ? 'border-2  border-white border-dashed' : ''
      } rounded-2xl px-4 py-3 ${className}`}
    >
      {children}
    </div>
  )
}

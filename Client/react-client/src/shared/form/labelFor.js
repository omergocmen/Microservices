export default function LabelFor({ name, errors, children, ...props }) {
    return (
        <label className={`text-[14px] leading-[17px] font-semibold mb-[4px] ${props.className} ${errors[name] ? `!text-red` : ``}`}>
            {children}
        </label>
    )
}

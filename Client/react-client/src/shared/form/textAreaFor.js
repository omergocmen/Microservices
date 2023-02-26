export default function TextareaFor({ type, register, errors, ...props }) {
    const additionalStyle = type === "line" ? "bg-transparent !rounded-none border-t-0 border-l-0 border-r-0 border-b-grey-7 !px-0 py-[6px]" : "";
    return (
        <textarea
            {...props}
            {...register}
            className={`border-[1px] border-grey-light-3 rounded-md py-[8px] px-[10px] placeholder-grey-dark-2 outline-none resize-none ${props.className} ${errors[register.name] ? `!border-red !text-red !placeholder-red` : ``} ${additionalStyle}`}
            autoComplete="off"
        />
    )
}
export default function TextboxFor({ type, register, errors, ...props }) {
    const additionalStyle = type === "line" ? "bg-transparent !rounded-none border-t-0 border-l-0 border-r-0 border-b-grey-7 !px-0 py-[6px]" : "";
    return (
        <input
            {...props}
            {...register}
            id={register.name}
            type={type?type:"text"}
            className={`border-[1px] w-full border-black rounded-lg py-[10px] px-[10px] placeholder-grey-dark-2 placeholder:text-[14px] outline-none ${props.className} ${errors[register.name] ? `!border-red !text-red !placeholder-red` : ``} ${additionalStyle}`}
            autoComplete="off"
        />
    )
}

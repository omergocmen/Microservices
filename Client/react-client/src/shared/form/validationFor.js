export default function ValidationFor({ name, title, errors }) {
    return (
        <>
            {errors[name] && errors[name].message ?
                (<span className="text-[14px] leading-[16px] text-red mt-[4px]">{errors[name].message}</span>) :
                (errors[name] && <span className="text-[14px] leading-[16px] text-red mt-[4px]">{title}</span>)
            }
        </>
    )
}

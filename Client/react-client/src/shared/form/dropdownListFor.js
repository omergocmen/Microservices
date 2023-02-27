import Select from "react-select";
import { Controller } from "react-hook-form";

export default function DropdownListFor({
  isMulti,
  searchPlaceholder,
  noOptionsMessage,
  register,
  errors,
  control,
  className,
  data,
  onChangeCustom,
}) {
  return (
    <Controller
      name={register.name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <Select
          menuPortalTarget={document.body}
          menuPosition={"fixed"}
          {...field}
          className={className}
          errors={errors}
          instanceId={register.name}
          options={data}
          placeholder={searchPlaceholder}
          noOptionsMessage={() => noOptionsMessage}
          isClearable={true}
          isMulti={isMulti}
          value={data && data.find((x) => x.value === field.value)}
          onChange={(e) => {
            field.onChange(e);
            onChangeCustom && onChangeCustom(e);
          }}
        />
      )}
    />
  );
}

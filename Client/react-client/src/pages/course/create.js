import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import BaseButton from "../../shared/components/baseButton";
import TextBoxFor from "../../shared/form/textboxFor";
import TextAreaFor from "../../shared/form/textAreaFor";
import ValidationFor from "../../shared/form/validationFor";
import DropdownListFor from "../../shared/form/dropdownListFor";
import LabelFor from "../../shared/form/labelFor";
import { addCourse } from "../../store/courseSlice";
import { useDispatch, useSelector } from "react-redux";
import { savePhoto } from "../../store/photoSlice";
import { getAllCategories } from "../../store/categorySlice";

export default function CreateCourse() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const categories = useSelector((state) => state.category.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const onSubmit = (data) => {
    const newCourse = {
      price: parseInt(data.price),
      featureDto: { duration: parseInt(data.duration) },
      pictureUrl: data.pictureUrl[0].name,
      name: data.name,
      description: data.description,
      categoryId: data.categoryId.value,
      userId: "bf7557b6-3e8b-48f8-b953-2552f23bc6e3",
    };
    dispatch(savePhoto(data.pictureUrl[0]));
    dispatch(addCourse(newCourse));
  };

  return (
    <div>
      <div className="w-3/5 m-auto shadow-2xl rounded-xl min-w-[400px]">
        <div className="bg-white rounded-lg mt-20">
          <h1 className="text-3xl p-5">Kurs Ekle</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="px-5 pb-5 text-left">
              <fieldset>
                <LabelFor name="name" errors={errors}>
                  Kurs Adı
                </LabelFor>
                <TextBoxFor
                  register={register("name", { required: true })}
                  errors={errors}
                  placeholder="Kurs Adı..."
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <ValidationFor name="name" title="Kurs adı alanını boş bırakmayınız." errors={errors} />
              </fieldset>

              <fieldset>
                <LabelFor name="description" errors={errors}>
                  Açıklama
                </LabelFor>
                <TextAreaFor
                  register={register("description", { required: true })}
                  errors={errors}
                  placeholder="Açıklama..."
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <ValidationFor name="description" title="Açıklama alanını boş bırakmayınız." errors={errors} />
              </fieldset>

              <div className="w-full flex justify-between">
                <div className="w-2/5">
                  <fieldset>
                    <LabelFor name="categoryId" errors={errors}>
                      Kategori
                    </LabelFor>
                    <DropdownListFor
                      searchPlaceholder={"Seçiniz..."}
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      register={register("categoryId")}
                      data={categories.map((item) => {
                        return {
                          value: item.id,
                          label: item.name,
                        };
                      })}
                      control={control}
                      errors={errors}
                    />
                    <ValidationFor name="categoryId" title="Kategori alanını boş bırakmayınız." errors={errors} />
                  </fieldset>
                </div>
                <div className="w-2/5">
                  <fieldset>
                    <LabelFor name="price" errors={errors}>
                      Fiyat Bilgisi
                    </LabelFor>
                    <TextBoxFor
                      type="number"
                      register={register("price", { required: true })}
                      errors={errors}
                      placeholder="Fiyat..."
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    />
                    <ValidationFor name="price" title="Açıklama alanını boş bırakmayınız." errors={errors} />
                  </fieldset>
                  <fieldset>
                    <LabelFor name="duration" errors={errors}>
                      Süre
                    </LabelFor>
                    <TextBoxFor
                      type="number"
                      register={register("duration", { required: true })}
                      errors={errors}
                      placeholder="Süre..."
                      className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                    />
                    <ValidationFor name="duration" title="Süre alanını boş bırakmayınız." errors={errors} />
                  </fieldset>
                </div>
              </div>
              <fieldset>
                <LabelFor name="pictureUrl" errors={errors}>
                  Süre
                </LabelFor>
                <TextBoxFor
                  type="file"
                  register={register("pictureUrl", { required: true })}
                  errors={errors}
                  className="h-[200px] text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <ValidationFor name="pictureUrl" title="Lütfen gerçerli bir dosya seçiniz." errors={errors} />
              </fieldset>
            </div>
            <hr className="mt-4" />
            <div className="flex flex-row-reverse p-3">
              <div className="flex-initial pl-3">
                <BaseButton text="Ekle" />
              </div>
              <div className="flex-initial"></div>
            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "primeflex/primeflex.css";
import Header from "../../partials/header";
import { Button } from "primereact/button";
import { Skeleton } from "primereact/skeleton";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { useDispatch, useSelector } from "react-redux";
import { getAllCourses } from "../../store/courseSlice";
import { useNavigate } from "react-router-dom";

export default function BasicDemo() {
    const [layout, setLayout] = useState("grid");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const courses = useSelector((state) => state.course.courses);
    useEffect(() => {
          dispatch(getAllCourses());
    }, []);

    const coursesSkeleton=[{},{},{},{},{},{},{},{},{},{}]

    const listItem = (course) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img
                        className="w-9  max-w-[240px] shadow-2 border-round"
                        src={"http://localhost:5012/photos/" + `${course.pictureUrl}`}
                        alt={course.name}
                    />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{course.name}</div>
                            <div className="text-md text-900">{course.description.substring(0, 120) + "..."}</div>
                            <Rating value={course.rating ? course.rating : 3} readOnly cancel={false}></Rating>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{course.category}</span>
                                </span>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">${course.price}</span>
                            <Button onClick={() => navigate(`/home/courses/${course.id}`)} icon="pi pi-angle-right" className="p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const gridItem = (course) => {
        return (
            <div className="col-14 sm:col-6 lg:col-12 xl:col-4 p-2">
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <div className="flex align-items-center gap-2">
                            <i className="pi pi-tag"><b className="mx-1">{course.categoryName}</b></i>
                            <span className="font-semibold">{course.category}</span>
                        </div>
                    </div>
                    <div className="flex flex-column h-[350px] align-items-center gap-3 py-5">
                        <div>
                            <p className="text-2xl font-bold">{course.name}</p>
                        </div>
                        <img
                            className="w-9 max-w-[250px] shadow-2 border-round"
                            src={"http://localhost:5012/photos/" + `${course.pictureUrl}`}
                            alt={course.name}
                        />
                        <div className="text-md">{course.description.substring(0, 120) + "..."}</div>
                        <Rating value={course.rating ? course.rating : 3} readOnly cancel={false}></Rating>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <span className="text-2xl font-semibold">{course.price}$</span>
                        <Button onClick={() => navigate(`/home/courses/${course.id}`)} icon="pi pi-angle-right" className="p-button-rounded" />
                    </div>
                </div>
            </div>
        );
    };

    const listItemSkeleton = () => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <Skeleton className="w-9 sm:w-16rem xl:w-10rem shadow-2 h-6rem block xl:block mx-auto border-round" />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <Skeleton className="w-8rem border-round h-2rem" />
                            <Skeleton className="w-6rem border-round h-1rem" />
                            <div className="flex align-items-center gap-3">
                                <Skeleton className="w-6rem border-round h-1rem" />
                                <Skeleton className="w-3rem border-round h-1rem" />
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <Skeleton className="w-4rem border-round h-2rem" />
                            <Skeleton shape="circle" className="w-3rem h-3rem" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const gridItemSkeleton = () => {
        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                        <Skeleton className="w-6rem border-round h-1rem" />
                        <Skeleton className="w-3rem border-round h-1rem" />
                    </div>
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        <Skeleton className="w-9 shadow-2 border-round h-10rem" />
                        <Skeleton className="w-8rem border-round h-2rem" />
                        <Skeleton className="w-6rem border-round h-1rem" />
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <Skeleton className="w-4rem border-round h-2rem" />
                        <Skeleton shape="circle" className="w-3rem h-3rem" />
                    </div>
                </div>
            </div>
        );
    };

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }
        if (layout === "list") return listItem(product);
        else if (layout === "grid") return gridItem(product);
    };

    const itemTemplateSkeleton = () => {
        if (layout === "list") return listItemSkeleton();
        else if (layout === "grid") return gridItemSkeleton();
    };
    const header = () => {
        return (
            <div className="flex justify-content-end">
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
        );
    };

    return (
        <main>
            <Header />
            {courses?.length>0 ? (
                <>
                    <div className="card">
                        <DataView value={courses} paginator rows={6} itemTemplate={itemTemplate} layout={layout} header={header()} />
                    </div>
                </>
            ) : (
                <>
                    <div className="card">
                        <DataView value={coursesSkeleton} paginator rows={6} itemTemplate={itemTemplateSkeleton} layout={layout} header={header()} />
                    </div>
                </>
            )}
        </main>
    );
}

import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../store/orderSlice";
import moment from "moment/moment";

export default function Order() {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.order.orders);
    const [expandedRows, setExpandedRows] = useState(null);

    useEffect(() => {
        dispatch(getOrders());
    }, []);
    

    const representativeBodyTemplate = (rowData) => {
        return (
          <img
            src={"http://localhost:5012/photos/" + rowData?.pictureUrl}
            alt={rowData.image}
            width="64px"
            className="shadow-4"
          />
        );
      };
    const rowExpansionTemplate = (data) => {
        return (
            <div className="p-3">
                <DataTable value={data.orderItems}>
                    <Column field="representative.name" header="Ürün" body={representativeBodyTemplate} />
                    <Column field="productId" header="Ürün Id" sortable></Column>
                    <Column field="productName" header="Ürün Adı" sortable></Column>
                    <Column field="price" body={(item)=>{return item.price+"$"}} header="Fiyat" sortable></Column>
                </DataTable>
            </div>
        );
    };
    const allowExpansion = (rowData) => {
        return rowData.orderItems.length > 0;
    };

    const header = (
        <div className="py-2">
            <h1 className="text-4xl">Sipariş Geçmişi</h1>
        </div>
      );


    return (
        <DataTable
            className="mt-20"
            value={orders}
            paginator
            header={header}
            rows={10}
            rowExpansionTemplate={rowExpansionTemplate}
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            dataKey="id"
            tableStyle={{margin:"auto", minWidth: "50rem"}}
        >
            <Column expander={allowExpansion} style={{ width: "5rem" }} />
            <Column
                field="cartType"
                className="w-auto"
                body={() => {
                    return "Banka";
                }}
                header="Kart Tipi"
                sortable
            />
            <Column field="address.province" header="Address" sortable />
            <Column field="id" header="Sipariş Id" sortable />
            <Column
                field="price"
                body={(item) => {
                    return item?.orderItems?.reduce((n, {price}) => n + price, 0)+"$"
                }}
                header="Toplam Tutar"
                sortable
            />
            <Column
                field="createdDate"
                header="Oluşturulma Tarihi"
                body={(item) => {
                    return moment(item.createdDate).format("DD.MM.YYYY");
                }}
                sortable
            />
        </DataTable>
    );
}

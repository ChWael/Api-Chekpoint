import React from "react";

function Card({ el }) {
return (
    <div className="AllUsers">
    <div className="UserId">
        <div className="Id">{el.id}</div>
        <h5> {`Name: ${el.name}`} </h5>
        <h5> {`UserName: ${el.username}`} </h5>
        <h5> {`Email: ${el.email}`} </h5>
    </div>
    <div className="Address">
        <h5> {`Street: ${el.address.street}`} </h5>
        <h5> {`Suite: ${el.address.suite}`} </h5>
        <h5> {`City: ${el.address.city}`} </h5>
        <h5> {`ZipCode: ${el.address.zipcode}`} </h5>
    </div>
    <div className="Geo">
        <h5> {`Lat: ${el.address.geo.lat}`} </h5>
        <h5> {`Lng: ${el.address.geo.lng}`} </h5>
    </div>
    <div className="Work">
        <h5> {`PhoneNumber:${el.number}`} </h5>
        <h5> {`WebSite:${el.website}`} </h5>
        <h5> {`Company-Name:${el.company.name}`} </h5>
        <h5> {`Company-CatchPhrase:${el.company.catchphrase}`} </h5>
        <h5> {`Company-Bs:${el.company.bs}`} </h5>
    </div>
    </div>
);
}

export default Card;

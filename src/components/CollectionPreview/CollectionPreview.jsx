import React from "react";
import CollectionItem from "../CollectionItem/CollectionItem";
import "./CollectionPreview.styles.scss";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps}></CollectionItem>
        ))}
      </div>
    </div>
  );
};

export default PreviewCollection;

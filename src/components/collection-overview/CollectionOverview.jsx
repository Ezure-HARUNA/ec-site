import React from "react";
import { connect } from "react-redux";
import "./CollectionOverview.styles.scss";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/CollectionPreview/CollectionPreview";
import { selectCollections } from "../../redux/shop/shop.selectors";

const CollectionOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections
      .filter((item, idx) => idx < 4)
      .map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);

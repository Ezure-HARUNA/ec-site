import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../cart-item/CartItem";
import { selectCollection } from "../../../redux/shop/shop.selectors";
import "./Collection.styles.scss";

const Collection = ({ match }) => {
  // const { title, items } = collection;
  console.log(match.params.collectionId);
  return (
    <div className="collection-page">
      <h2 className="title">collection page</h2>
      {/* <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div> */}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);

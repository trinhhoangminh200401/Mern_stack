    import React from "react";
    import PropTypes from "prop-types";
    import { Link } from "react-router-dom";
    import Button from "../Button/Button";
    import numberWithCommas from "../../utils/ConvertNumber";
   import { set } from "../../redux/reducer/productModalSlice";
    import { useDispatch, useSelector } from "react-redux";
    
    import Star from "../Star/Star";
    const ProductCard = (props) => {
    const dispatch = useDispatch();

      return (
        <div className="product-card">
        <Link to={`/catelog/${props._id}`}>
            {console.log(props.CategoryId)}
            <div className="product-card__image">
            <img src={props.Image2} alt="img" />
            <img src={props.Image} alt="img" />
          
            </div>
            <h3 className="product-card__name">{props.Name}</h3>
            <Star rating={props.Quantity} />
            <div className="product-card__price">
            {numberWithCommas(parseInt(props.Price))}
            <span className="product-card__price__old">
                <del>{numberWithCommas(399999)}đ</del>
            </span>
            </div>
        </Link>
        <div className="product-card__btn">
            <Button
            size="sm"
            icon="cart"
            color="#fff"
            animation={false}
            onClick={() =>dispatch(set(props._id))}
            >
            Chọn mua
            </Button>
        </div>
        </div>
    );
    };

    ProductCard.propTypes = {
    _id: PropTypes.any,
    Image: PropTypes.string,
    Name: PropTypes.string,
    Price: PropTypes.number,
    };

    export default ProductCard;

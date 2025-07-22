import "./PropertyReview.css"

export default function PropertyReview(props) {

    const review = props.review

    return (
        <div className="review-card">
            <div className="review-header">
                <img src={review.guest_avatar} alt={`${review.guest}'s avatar`} className="avatar" />
                <div className="guest-info">
                    <div className="guest-name">{review.guest}</div>
                    <div className="review-date">{new Date(review.created_at).toLocaleDateString()}</div>
                </div>
            </div>
            <div className="review-rating">Rating: {review.rating}/5</div>
            <div className="review-comment">{review.comment}</div>
        </div>
    );

};
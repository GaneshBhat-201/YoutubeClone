import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, editComment } from "../../actions/comments";

import "./comments.css";
function DisplayComments({
  cId,
  commentBody,
  userId,
  commentOn,
  userCommented,
}) {
  const [Edit, setEdit] = useState(false);
  const [cmtBdy, setcmtBdy] = useState("");
  const [cmtId, setcmtId] = useState("");
  const CurrentUser = useSelector((state) => state?.currentUserReducer);

  const handleEdit = (ctId, ctBdy) => {
    setEdit(true);
    setcmtId(ctId);
    setcmtBdy(ctBdy);
  };

  const dispatch = useDispatch();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!cmtBdy) {
      alert("Type Your comments");
    } else {
      dispatch(
        editComment({
          id: cmtId,
          commentBody: cmtBdy,
        })
      );
      setcmtBdy("");
    }
    setEdit(false);
  };
  const handleDel=(id)=>{
    dispatch(deleteComment(id))
  }


  
  return (
    <>
      {Edit ? (
        <>
          <div className="cmtContainer">
            <p className="cmtLogo">{userCommented[0].toUpperCase()}</p>
            <p className="roboto-medium cmtUser">@{userCommented}</p>
            <p className="cmtTime">{moment(commentOn).fromNow()}</p>
          </div>
          <form
            className="comments_sub_form_comments"
            onSubmit={handleOnSubmit}
          >
            <input
              type="text"
              onChange={(e) => setcmtBdy(e.target.value)}
              placeholder="Edit comment..."
              value={cmtBdy}
              className="comment_ibox"
              id="comment_ibox"
            />
            <input
              type="submit"
              value="Change"
              className="comment_add_btn_comments"
            />
          </form>
        </>
      ) : (
        <div>
        <div className="cmtContainer">
        <p className="cmtLogo">{userCommented[0].toUpperCase()}</p>
        <p className="roboto-medium cmtUser">@{userCommented}</p>
        <p className="cmtTime">{moment(commentOn).fromNow()}</p>
        </div>
        <p className="cmtBody roboto-light">{commentBody}</p>
        </div>
      )}

      {CurrentUser?.result._id === userId && (
        <p className="EditDel_DisplayCommendt">
          <i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
          <i onClick={()=> handleDel(cId)} >Delete</i>
        </p>
      )}


    </>
  );
}

export default DisplayComments;







// {Edit ? (
//   <>
//     <div className="cmtContainer">
//     <p className="cmtLogo">{userCommented[0].toUpperCase()}</p>
//     <p className="roboto-medium cmtUser">@{userCommented}</p>
//     <p className="cmtTime">{moment(commentOn).fromNow()}</p>
//     </div>
//     <form
//       className="comments_sub_form_comments"
//       onSubmit={handleOnSubmit}
//     >
//       <input
//         type="text"
//         onChange={(e) => setcmtBdy(e.target.value)}
//         placeholder="Edit comment..."
//         value={cmtBdy}
//         className="comment_ibox"
//         id="comment_ibox"
//       />
//       <input
//         type="submit"
//         value="Change"
//         className="comment_add_btn_comments"
//       />
//     </form>
//   </>
// ) : (

//   <div>
//   <div className="cmtContainer">
//   <p className="cmtLogo">{userCommented[0].toUpperCase()}</p>
//   <p className="roboto-medium cmtUser">@{userCommented}</p>
//   <p className="cmtTime">{moment(commentOn).fromNow()}</p>
//   </div>
//   <p className="cmtBody roboto-light">{commentBody}</p>
//   </div>
// )}


// {CurrentUser?.result._id === userId && (
//   <p className="EditDel_DisplayCommendt">
//     <i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
//     <i  >Delete</i>
//   </p>
// )}

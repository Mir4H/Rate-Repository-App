import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async (id) => {
    try {
      await mutate({
        variables: { deleteReviewId: id }
      });
    } catch (error) {
      console.log(error)
    }
  };

  return [deleteReview, result];
};

export default useDeleteReview;

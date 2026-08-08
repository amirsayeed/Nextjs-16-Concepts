import { PostFeedback } from '@/action/server/feedback';
import FeedbackForm from '@/components/forms/FeedbackForm';
import React from 'react';

const AddFeedback = () => {
    return (
        <div>
            <h2 className="text-2xl py-3 text-center">Add Feedback</h2>
            <FeedbackForm postFeedback={PostFeedback}></FeedbackForm>
        </div>
    );
};

export default AddFeedback;
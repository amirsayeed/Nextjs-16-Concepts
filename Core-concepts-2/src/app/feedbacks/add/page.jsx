import FeedbackForm from '@/components/forms/FeedbackForm';
import React from 'react';
import { postFeedback } from "@/action/server/feedback";

const AddFeedback = () => {
    return (
        <div>
            <h2 className="text-2xl py-3 text-center">Add Feedback</h2>
            <FeedbackForm postFeedback={postFeedback}></FeedbackForm>
        </div>
    );
};

export default AddFeedback;
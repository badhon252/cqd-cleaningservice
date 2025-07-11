import { DashboardLayout } from "@/components/dashboard-layout";
import React from "react";
import AllReviewData from "./_components/AllReviewData";

const ReviewPage = () => {
  return (
    <div>
      <DashboardLayout title="Reviews">
        <AllReviewData />
      </DashboardLayout>
    </div>
  );
};

export default ReviewPage;

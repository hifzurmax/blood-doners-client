
import useAuth from "../../hooks/useAuth";
import { FaHandHoldingHeart, FaSackDollar, FaUsers } from "react-icons/fa6";

const AdminHome = () => {
    const { user } = useAuth();
    console.log(user);


    return (
        <div className="space-y-4 m-4">
            <div className="flex flex-col lg:flex-row stats shadow">
                <div className="stat">
                    <div className="stat-figure text-5xl text-second">
                        <FaUsers></FaUsers>
                    </div>
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value text-second">500</div>
                    <div className="stat-desc">Users are increasing day by day</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-5xl text-second">
                        <FaHandHoldingHeart />
                    </div>
                    <div className="stat-title">Total Blood Donation Requests</div>
                    <div className="stat-value text-second">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-5xl text-second">
                        <FaSackDollar />
                    </div>
                    <div className="stat-title">Total Fundings</div>
                    <div className="stat-value text-second">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
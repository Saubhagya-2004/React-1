import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <>
            <div className="about">
                <h1>About Us</h1>
                <p>
                    Welcome to <strong>Foodie's Paradise</strong>, your one-stop destination for discovering the best restaurants and delicious cuisines in your city. We are passionate about bringing food lovers and amazing dining experiences together.
                </p>
                <h2>Our Mission</h2>
                <p>
                    At Foodie's Paradise, our mission is to make food discovery easy and enjoyable. Whether you're craving a quick bite or planning a special dinner, we help you find the perfect place to satisfy your taste buds.
                </p>
                <h2>Why Choose Us?</h2>
                <ul>
                    <li>Discover top-rated restaurants near you.</li>
                    <li>Explore a wide variety of cuisines and dishes.</li>
                    <li>Read reviews and ratings from fellow food enthusiasts.</li>
                    <li>Enjoy a seamless and user-friendly experience.</li>
                </ul>
                <h2>Contact Us</h2>
                <p>
                    Have questions or feedback? We'd love to hear from you! Reach out to us at <a href="mailto:support@foodiesparadise.com">support@foodiesparadise.com</a>.
                </p>
                <h2>Our Team</h2>
                <p>
                    We are a group of food enthusiasts and tech experts dedicated to making your food journey delightful. From curating the best restaurants to ensuring a smooth user experience, we work tirelessly to bring you the best.
                </p>
                <Outlet />
            </div>
        </>
    );
};

export default About;
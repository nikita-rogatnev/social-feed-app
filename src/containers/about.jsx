import React from 'react';

const About = () => (
    <section className="section">
        <h2 className="section__title">About Page</h2>
        <div className="section__container">
            <p>Implement a widget, which renders N last social posts from the given JSON feed. The widget should pull
                updates from the feed with the given interval and update the displayed list by removing old items and
                displaying the new ones, so the most recent N posts will be displayed.</p>
            <p>Each post record should display:</p>
            <ul>
                <li>Post date (formatted as DD/MM/YYYY HH:MM) in the user's timezone</li>
                <li>Author name</li>
                <li>Message body</li>
            </ul>
            <p>The widget should accept the following configuration options:</p>
            <ul>
                <li>Feed URL</li>
                <li>Number of posts to display</li>
                <li>Update interval</li>
            </ul>
            <p>While implementing, think about loading and rendering performance, memory usage and leaks.</p>
            <p>The following feed can be used as an example: http://api.massrelevance.com/MassRelDemo/kindle.json. It
                supports both CORS and JSONP. It also provides some Web API:
                http://dev.massrelevance.com/docs/api/v1.0/stream/#ref-params-standard</p>
            <p>Bonus points for more advanced webpack/babel configurations, adding unit tests, atomic component design
                and
                or use of higher order components, and UI/UX best practices.</p>
        </div>
    </section>
);

export default About;

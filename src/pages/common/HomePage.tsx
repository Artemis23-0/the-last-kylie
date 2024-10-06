import React from "react";
import BasicPageLayout from "../../components/layout/BasicPageLayout";
import Beach from "../../images/beach.jpg";

function Home() {
    return(
        <BasicPageLayout
            title="Discovering Nomad Kylie"
            subtitle="Unlock the Magic of the Wild"
            backgroundImage={Beach}
        >
            <div>
                Welcome, friends! We're glad you found us! Here at the American Society for Discovering Nomad Kylie, we have 
                dedicated our lives to protecting and observing the Kylie species and ensuring her survival for many generations to come.
            </div>
        </BasicPageLayout>
    )
}

export default Home;
// import React from "react";
import image from "./img/hitesh.jpg";

function Card(username="HC", post="Not assigned yet") {
    // console.log(props);
    return (
        <div>
            <figure className="md:flex md:p-0 bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto md:rounded-none md:w-48 md:h-auto" src={image} alt="Hitesh" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            “Tailwind CSS is the only framework that I#&39;ve seen scale
                            on large teams. It#&39;s easy to customize, adapts to any design,
                            and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">{username}</div>
                        <div className="text-slate-700 dark:text-slate-500">
                            {post}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    );
}

export default Card;

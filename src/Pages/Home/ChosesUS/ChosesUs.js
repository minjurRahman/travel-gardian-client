import React from 'react';

const ChosesUs = () => {
    return (
        <div className='mb-7'>
            <h1 className='text-center text-5xl font-bold text-info'>Why Choose Travel Guardian</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <div className="card w-96 bg-base-100 shadow-xl" data-aos="flip-left"
                data-aos-easing="linear"
                data-aos-duration="500">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">HIGHEST QUALITY</h2>
                        <p>350+ reviews & 5/5 rating on TripAdvisor. Awarded Certificate of Excellence in 2022, 2020, 2021 and 2022, Hall of Fame in 2022, and Traveler's Choice in 2022 by TripAdvisor.</p>
                        <div className="card-actions">
                        <hr className='text-info' />
                        </div>
                    </div>
                </div>
                
                <div className="card w-96 bg-base-100 shadow-xl " data-aos="flip-left"
                data-aos-easing="linear"
                data-aos-duration="500">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">LOWER PRICE</h2>
                        <p>Compared to the foreign operators. As you are booking directly, we don't need to pay any foreign operator a hefty commission. So our tours are an excellent value for money.</p>
                        <div className="card-actions">
                        <hr className='text-info' />
                        </div>
                    </div>
                </div>
                
                <div className="card w-96 bg-base-100 shadow-xl " data-aos="flip-left"
                data-aos-easing="linear"
                data-aos-duration="500">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">COVID-19 PROTECTION</h2>
                        <p>Free cancellation and date change options if your country or Bangladesh is under lockdown or Bangladesh enters the Red List of your country. No fear of losing your money.</p>
                        <div className="card-actions">
                        <hr className='text-info' />
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl " data-aos="flip-left"
                data-aos-easing="linear"
                data-aos-duration="500">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">TINY GROUPS</h2>
                        <p>6 & 12 Travelers per group maximum. Join any group and meet some like-minded travelers from around the world. Private tours are also available for a group of just 2 travelers.</p>
                        <div className="card-actions">
                        <hr className='text-info' />
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl " data-aos="flip-left"
                data-aos-easing="linear"
                data-aos-duration="500">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">SCHEDULED TOURS</h2>
                        <p>Regularly scheduled tours year-round. Suitable for solo travelers. Reduce cost by sharing rooms with total same-sex strangers or book a Single Supplement for separate rooms</p>
                        <div className="card-actions">
                        <hr className='text-info' />
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl " data-aos="flip-left"
                data-aos-easing="linear"
                data-aos-duration="500">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">LOCAL BUSINESS</h2>
                        <p>We are a home-grown local small business. 100% of your money goes to the locals. You support a local small business by booking directly with us and making local tourism sustainable.</p>
                        <div className="card-actions">
                        <hr className='text-info' />
                        </div>
                    </div>
                </div>

              </div>
        </div>
    );
};

export default ChosesUs;
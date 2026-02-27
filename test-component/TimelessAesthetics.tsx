import React from 'react';
import styles from './TimelessAesthetics.module.css';

export default function TimelessAesthetics() {
    return (
        <div className={styles.main}>
            <section className={`${styles.section} ${styles.section1}`}>
                <div className={styles.content}>
                    <div className={styles.title}>Timeless Aesthetics</div>
                    <div className={styles.desc}>
                        We believe great design never goes out of style. Each project is built on clean lines,
                        thoughtful materials, and harmony between form and function.
                    </div>
                </div>
                <div className={styles.imgBox}>
                    <img
                        className={styles.img}
                        src="https://images.unsplash.com/photo-1760286159549-4413b0063baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjE1ODY2MDJ8&ixlib=rb-4.1.0&q=80&w=800"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </section>

            <section className={`${styles.section} ${styles.section2}`}>
                <div className={styles.content}>
                    <div className={styles.title}>Made for You</div>
                    <div className={styles.desc}>
                        Your home should tell your story. We tailor every detail — from layout to lighting — to
                        reflect your lifestyle, personality, and vision.
                    </div>
                </div>
                <div className={styles.imgBox}>
                    <img
                        className={styles.img}
                        src="https://images.unsplash.com/photo-1760632373541-8db1f9eb8d19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjE1ODcyMjd8&ixlib=rb-4.1.0&q=80&w=800"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </section>

            <section className={`${styles.section} ${styles.section3}`}>
                <div className={styles.content}>
                    <div className={styles.title}>Smooth Sailing</div>
                    <div className={styles.desc}>
                        From concept to completion, we guide you through each step. Our transparent process
                        ensures clarity, collaboration, and creativity at every stage.
                    </div>
                </div>
                <div className={styles.imgBox}>
                    <img
                        className={styles.img}
                        src="https://images.unsplash.com/photo-1760000116856-e9dfd91acbfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjE1ODcyNTN8&ixlib=rb-4.1.0&q=80&w=800"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </section>

            <section className={`${styles.section} ${styles.section4}`}>
                <div className={styles.content}>
                    <div className={styles.title}>Earth in Mind</div>
                    <div className={styles.desc}>
                        We design with respect for the planet. From local craftsmanship to eco-friendly materials,
                        our spaces are beautiful, responsible, and lasting.
                    </div>
                </div>
                <div className={styles.imgBox}>
                    <img
                        className={styles.img}
                        src="https://images.unsplash.com/photo-1758718036788-de50f9fd2192?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjE1ODcyNzl8&ixlib=rb-4.1.0&q=80&w=800"
                        alt=""
                        loading="lazy"
                    />
                </div>
            </section>
        </div>
    );
}

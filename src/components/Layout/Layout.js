import classes from './Layout.module.css'
import React from 'react'

const Layout = (props) => {
    return (
        <section className={classes.root} style={{background:` url(${props.urlBg})`, backgroundColor: props.colorBg}}>
            <div className={classes.wrapper}> 
                <article>
                    <div className={classes.title}>
                        <h3>{props.title}</h3>
                        <span className={classes.separator}></span>
                    </div>
                    <div className={classes.desc.full}>
                        <p>{props.descr}</p>
                    </div>
                </article>
            </div>
         </section>
    )
}

export default Layout;
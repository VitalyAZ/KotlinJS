package com.home

import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.div
import kotlin.browser.document

fun main(args: Array<String>) {
    println("My app started")

    val root = document.getElementById("myApp")

    root!!.appendChild(
            document.create.div {
                classes = setOf("card")
                style = "width: 18rem;"
                div {
                    classes = setOf("card-header")
                    h1 { +"Asia" }
                }
                ul {
                    classes = setOf("list-group")
                    li {
                        classes = setOf("list-group-item", "d-flex", "justify-content-between", "align-items-center")
                        +"Hong Kong"
                        span {
                            classes = setOf("badge", "badge-primary", "badge-pill")
                            +"12"
                        }
                    }
                }
            }
    )
}
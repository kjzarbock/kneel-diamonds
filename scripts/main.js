import { MetalOptions } from './Metals.js'
import { StyleOptions } from './Styles.js'
import { SizeOptions } from './Sizes.js'
import { SubmissionList } from './Submissions.js'
import { SaveSubmission } from './SaveSubmissions.js'
import { Orders } from './PlacedOrders.js'

const container = document.querySelector("#container")

const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const styleOptionsHTML = await StyleOptions()
    const sizeOptionsHTML = await SizeOptions()
    const buttonHTML = await SaveSubmission()
    const submissionListHTML = await SubmissionList()
    const orders = await Orders()

    container.innerHTML = `
    ${metalOptionsHTML}
    ${styleOptionsHTML}
    ${sizeOptionsHTML}`

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals_options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes_options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles_options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
        ${submissionListHTML}    
        ${buttonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${orders}
        </article>
    `
    container.innerHTML = composedHTML
}

document.addEventListener("newSubmissionCreated", render)

render()
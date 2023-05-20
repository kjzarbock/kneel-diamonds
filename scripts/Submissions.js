export const SubmissionList = async () => {
    const response = await fetch("http://localhost:8088/orders")
    const submissions = await response.json()

    let submissionHTML = " "
    submissionHTML += `<section class="submission">
        
        </section>`
    return submissionHTML

}
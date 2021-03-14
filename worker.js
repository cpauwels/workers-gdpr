addEventListener("fetch", (event) => {
    event.respondWith(handleRequest(event.request))
})

/**
 * Respond to the request
 * @param {Request} request
 */
async function handleRequest(request) {
    // The cf property is not available in the preview
    const country = request.cf && request.cf.country ? request.cf.country : "XX"

    const gdprCountries = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "EL", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "NO", "IS", "LI", "UK"]

    return new Response(
        JSON.stringify({ gdpr: gdprCountries.includes(country) }),
        {
            status: 200, 
            headers: { 
                "content-type": "application/json"
            }
        }
    )
}
  
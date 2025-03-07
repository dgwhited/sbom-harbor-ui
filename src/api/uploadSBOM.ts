/**
 * Function that makes a request to the Harbor API.
 * @module @sbom-harbor-ui/dashboard/api/harborRequest
 */
import harborRequest from '@/utils/harborRequest'

/**
 * Function that makes a request to the Harbor API to delete a token.
 * @param {[AbortController]} abortController - signal to cancel the request.
 * @param {string} token - API token to authenticate the request.
 * @param {string} fileContents - the contents of the SBOM file as a string.
 * @param {string} codebaseId - the id of the codebase to upload the SBOM for.
 * @param {string} projectId - the id of the project containing the codebase.
 * @param {string} teamId - the id of the team to delete the token from.
 * @returns {Promise} - the response from the Harbor API.
 */
const uploadSBOM = async ({
  abortController = new AbortController(),
  token,
  fileContents,
  codebaseId,
  projectId,
  teamId,
}: {
  abortController?: AbortController
  token: string
  teamId: string
  projectId: string
  codebaseId: string
  fileContents: string
}): Promise<Response> =>
  harborRequest({
    body: JSON.parse(fileContents),
    jwtToken: token,
    method: 'POST',
    path: `${teamId}/${projectId}/${codebaseId}/sbom`,
    signal: abortController.signal,
  })

export default uploadSBOM

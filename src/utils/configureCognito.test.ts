/**
 * Mock Auth from @aws-amplify/auth
 * @see {@link @sbom-harbor-ui/dashboard/utils/configureCognito.js}
 */
import { Amplify } from 'aws-amplify'
import configureCognito from '@/utils/configureCognito'

// Mock the Amplify module to spy on the Auth.configure method
jest.mock('aws-amplify', () => ({
  Amplify: {
    configure: jest.fn(),
  },
}))

beforeEach(() => jest.resetAllMocks())

afterAll(() => jest.clearAllMocks())

test.skip('should call Auth.configure', () => {
  configureCognito()
  expect(Amplify.configure).toHaveBeenCalled()
})

test('returns null', () => {
  const result = configureCognito()
  expect(result).toBeNull()
})

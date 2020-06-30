const downloadGitRepo = require('download-git-repo')

export const downloadGit = async (gitUrl: string, projectName:string) => {
  return new Promise((resolve, reject) => {
    downloadGitRepo(gitUrl, projectName, (err: any) => {
      if (err) {
        reject(err)
      }
      resolve()
    })
  })
}
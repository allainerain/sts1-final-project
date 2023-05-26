import dialogues from './dialogues.js'

export function load(){
	return {
		scenes: dialogues.map((scene) => ({
			sceneName: scene.sceneName,
			dialogues: scene.body.map((dialogues) => ({
				speaker: dialogues.speaker,
				content: dialogues.content
			}))
		}))
	}
	
}

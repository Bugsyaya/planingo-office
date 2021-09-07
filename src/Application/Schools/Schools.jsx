import React, { useState } from 'react'
import './schools.scss'
import { Select, TimePicker } from 'antd'
import { Tooltip, Card, Button, Radio } from '@planingo/ditto'
import { useIntl } from 'react-intl'
import { DeleteOutlined } from '@ant-design/icons'
import { RadioGroup } from '@planingo/ditto'

export const Schools = () => {
	const Line = ({ setJoursChecked, jourDeLaSemaine, index }) => {
		const { RangePicker } = TimePicker
		const { Option } = Select

		const onClickLine = () => {
			setLines([...lines.filter((line) => lines[index] !== line)])
		}

		return (
			<div className="line">
				<Select
					mode="tags"
					placeholder={`Ajouter un jour ${index}`}
					optionLabelProp="label"
					onChange={setJoursChecked}
				>
					{jourDeLaSemaine.map((jour) => (
						<Option key={jour} label={jour}>
							{jour}
						</Option>
					))}
				</Select>
				<div className="input">
					<RangePicker format="HH:mm" placeholder={['Début', 'Fin']} />
				</div>
				<Tooltip title="search">
					<Button
						onClick={onClickLine}
						type="dashed"
						shape="circle"
						icon={<DeleteOutlined />}
					/>
				</Tooltip>
			</div>
		)
	}
	const intl = useIntl()

	const jourDeLaSemaine = [
		'Lundi',
		'Mardi',
		'Mercredi',
		'Jeudi',
		'Vendredi',
		'Samedi',
	]

	const [lines, setLines] = useState([])

	const onClick = () => {
		setLines([...lines, {}])
	}

	const [studentChecked, setStudentChecked] = useState(
		intl.formatMessage({ id: 'settings.school.hour' }),
	)
	const [, setJoursChecked] = useState([])
	return (
		<div className="schools">
			<Button>Saved</Button>
			<Card
				title={intl.formatMessage({
					id: 'settings.school.constraints.modules',
				})}
			>
				<div className="school">
					<RadioGroup
						onChange={setStudentChecked}
						defaultValue={studentChecked}
						buttonStyle="solid"
					>
						<Radio.Button
							value={intl.formatMessage({ id: 'settings.school.hour' })}
						>
							{intl.formatMessage({ id: 'settings.school.hour' })}
						</Radio.Button>
						<Radio.Button
							value={intl.formatMessage({ id: 'settings.school.day' })}
						>
							{intl.formatMessage({ id: 'settings.school.day' })}
						</Radio.Button>
						<Radio.Button
							value={intl.formatMessage({ id: 'settings.school.week' })}
						>
							{intl.formatMessage({ id: 'settings.school.week' })}
						</Radio.Button>
					</RadioGroup>

					<div className="select">
						{lines.map((line, index) => {
							return (
								<Line
									key={index}
									index={index}
									setJoursChecked={setJoursChecked}
									jourDeLaSemaine={jourDeLaSemaine}
								/>
							)
						})}
					</div>
					<Button type="text" className="add" onClick={onClick}>
						{intl.formatMessage({ id: 'settings.school.add.line' })}
					</Button>
				</div>
			</Card>
		</div>
	)
}

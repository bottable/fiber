import { Slider } from '..'

import React from 'react'
import { render } from 'test/utils'

describe('Slider', () => {
  it('renders correctly', () => {
    const slider = render(
      <>
        <div>
          <Slider defaultValue={30} />
          <br />
          <Slider value={30} />
        </div>
        <div>
          <Slider defaultValue={30} step={2} />
          <br />
          <Slider defaultValue={30} step={10} />
        </div>
        <div>
          <Slider defaultValue={30} disabled />
        </div>
        <div>
          <div style={{ height: 300 }}>
            <Slider defaultValue={30} vertical />
          </div>
        </div>
        <div>
          <Slider
            defaultValue={30}
            marks={{
              0: '0°C',
              26: '26°C',
              37: '37°C',
              100: {
                style: {
                  color: '#f50'
                },
                label: <strong>100°C</strong>
              }
            }}
          />
          <br />
          <div style={{ height: 300 }}>
            <Slider
              defaultValue={30}
              vertical
              marks={{
                0: '0°C',
                26: '26°C',
                37: '37°C',
                100: {
                  style: {
                    color: '#f50'
                  },
                  label: <strong>100°C</strong>
                }
              }}
            />
          </div>
        </div>
      </>
    )

    expect(slider).toMatchSnapshot()
  })
})
